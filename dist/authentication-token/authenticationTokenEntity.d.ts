import { User } from "src/user/userEntity";
export declare class AuthenticationToken {
    id: number;
    token: string;
    createdDate: Date;
    user: User;
    constructor(user: User);
    private generateToken;
}
