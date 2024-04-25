import { Module } from '@nestjs/common';
import { ImagesproductController } from './imagesproduct.controller';
import { ImagesproductService } from './imagesproduct.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImagesProductEntit } from './entitys/Iimagesproduct';

@Module({
  controllers: [ImagesproductController],
  providers: [ImagesproductService],
  imports:[TypeOrmModule.forFeature([ImagesProductEntit])],
  exports:[TypeOrmModule]

})
export class ImagesproductModule {}
