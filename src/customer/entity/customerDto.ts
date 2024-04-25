import { IsNotEmpty } from "class-validator";

export class CustomerDto{
    @IsNotEmpty()
    first_name:string;
    @IsNotEmpty()
    last_name:string;
    @IsNotEmpty()
    email:string
    @IsNotEmpty()
    phone_number:string
}