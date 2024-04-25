import { Repository } from "typeorm";
import { User } from "./userEntity";
export declare class UserRepository extends Repository<User> {
    findByEmail(email: string): Promise<User | undefined>;
}
