import { Controller, Get, Post, UploadedFile, UseInterceptors,Res,Param, ParseIntPipe,StreamableFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImagesproductService } from './imagesproduct.service';
import { Multer } from 'multer';



@Controller('file')
export class ImagesproductController {
    constructor(
        private readonly imageProdectServi:ImagesproductService
    ){}

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    async addAvatar( @UploadedFile() file: Multer.ImagesProductEntit) {
      return this.imageProdectServi.uploadDatabaseFile( file.buffer, file.originalname);
    }

  @Get('down')
  getAllFiles() {
    return this.imageProdectServi.getAllFiles();
  }

 
}
