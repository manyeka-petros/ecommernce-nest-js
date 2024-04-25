import { ImagesproductService } from './imagesproduct.service';
import { Multer } from 'multer';
export declare class ImagesproductController {
    private readonly imageProdectServi;
    constructor(imageProdectServi: ImagesproductService);
    addAvatar(file: Multer.ImagesProductEntit): Promise<import("./entitys/Iimagesproduct").ImagesProductEntit>;
    getAllFiles(): Promise<import("./entitys/Iimagesproduct").ImagesProductEntit[]>;
}
