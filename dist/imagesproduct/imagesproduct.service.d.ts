/// <reference types="node" />
import { ImagesProductEntit } from './entitys/Iimagesproduct';
import { Repository } from 'typeorm';
export declare class ImagesproductService {
    private imageProductRepos;
    constructor(imageProductRepos: Repository<ImagesProductEntit>);
    getAllFiles(): Promise<ImagesProductEntit[]>;
    uploadDatabaseFile(dataBuffer: Buffer, filename: string): Promise<ImagesProductEntit>;
}
