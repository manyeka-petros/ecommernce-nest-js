import { User } from "src/user/userEntity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('tokens')
export class AuthenticationToken {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    token: string;

    @Column({ name: 'created_date' })
    createdDate: Date;

    @OneToOne(() => User, { eager: true })
    @JoinColumn({ name: 'user_id' })
    user: User;

    constructor(user: User) {
        this.user = user;
        this.createdDate = new Date();
        this.token = this.generateToken();
    }

    private generateToken(): string {
        return Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2);
    }
}