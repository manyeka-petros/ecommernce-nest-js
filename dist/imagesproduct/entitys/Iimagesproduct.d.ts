import { Repository } from "typeorm";
export declare class ImagesProductEntit extends Repository<ImagesProductEntit> {
    id: number;
    filename: string;
    data: Uint8Array;
}
