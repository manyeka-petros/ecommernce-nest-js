import { CustomerService } from './customer.service';
import { CustomerDto } from './entity/customerDto';
export declare class CustomerController {
    private customerservice;
    constructor(customerservice: CustomerService);
    findAll(): Promise<import("./entity/customerEnti").CustomerEntity[]>;
    registerAllUser(customerDto: CustomerDto): Promise<import("./entity/customerEnti").CustomerEntity>;
    removeCustomer(id: number): Promise<import("typeorm").DeleteResult>;
    getOneCustomer(id: number): Promise<import("./entity/customerEnti").CustomerEntity>;
}
