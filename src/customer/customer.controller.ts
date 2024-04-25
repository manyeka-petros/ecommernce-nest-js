import { Body, Controller,Delete,Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerDto } from './entity/customerDto';



@Controller('customer')
export class CustomerController {
    constructor(
        private  customerservice : CustomerService
    ){}

    @Get('/mapo')
    findAll(){
        return this. customerservice.getAllCustomer();
    }
    @Post('/maz')

    registerAllUser(@Body() customerDto :CustomerDto){
        return this.customerservice.createAccount(customerDto)
    }

    @Delete(':id')

    removeCustomer(@Param('id',ParseIntPipe) id :number){
        return this.customerservice.removeCustomer(id);
    }
    @Get(':id')
    getOneCustomer(@Param('id',ParseIntPipe) id :number){
        return this.customerservice.getOneCustomer(id)
    }
        
}
