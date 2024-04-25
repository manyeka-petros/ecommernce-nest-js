import { Injectable, NotFoundException,Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as fs from 'fs';

import { ImagesProductEntit } from './entitys/Iimagesproduct';
import { Repository } from 'typeorm';


import { Multer } from 'multer';

import { Response } from 'express';


@Injectable()
export class ImagesproductService {
    constructor(
       @InjectRepository(ImagesProductEntit)
        private imageProductRepos: Repository<ImagesProductEntit>,
      ) {}
    
      async getAllFiles() {
        return this.imageProductRepos.find();
      }
    
      async uploadDatabaseFile(dataBuffer: Buffer, filename: string) {
        const newFile = await this.imageProductRepos.create({
          filename,
          data: dataBuffer
        })
        await this.imageProductRepos.save(newFile);
        return newFile;
      }
}
