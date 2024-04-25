import { EntityRepository, Repository } from "typeorm";
import { User } from "./userEntity";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  findByEmail(email: string): Promise<User | undefined> {
    return this.findOne({ where: { email } });
  }
}