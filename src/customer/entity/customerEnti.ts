import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CustomerEntity{
    @PrimaryGeneratedColumn({
        type : 'bigint'
    })
    id : number;
    @Column({
        nullable:false,
        default:''
    })
    first_name : string
    @Column({
        nullable:false,
        default:''
    })
    last_name : string
    @Column({
        nullable:false,
        default:''
    })
    email : string
    @Column({
        nullable:false,
        default:''
    })
    phone_number : string

    @Column({
        nullable:false,
        default:''
    })
    password : string




}