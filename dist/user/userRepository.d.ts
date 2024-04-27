import { Repository } from 'typeorm';
import { User } from './userEntity';
export declare class UserRepository {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findByEmail(email: string): Promise<User | undefined>;
}
