import { Model } from "sequelize";
import { Column, Entity, PrimaryGeneratedColumn, Repository } from "typeorm";
import { types } from "util";


@Entity()
export class ImagesProductEntit extends Repository<ImagesProductEntit>{
    @PrimaryGeneratedColumn(
        {type:'bigint'}
    )
    id: number
   
   @Column()
   filename: string;
 
  @Column({
    type: 'bytea',
  })
  data: Uint8Array;
 
}