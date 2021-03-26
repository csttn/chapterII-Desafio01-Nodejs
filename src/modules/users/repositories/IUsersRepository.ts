import { User } from "../model/User";

interface ICreateUserDTO {
  name: string;
  email: string;
}

interface IFindById {
  id: string;
}

interface IFindByEmail {
  email: string;
}

interface IUsersRepository {
  create({ name, email }: ICreateUserDTO): User;
  findById(id: string | string[]): User;
  findByEmail(email: string): User;
  turnAdmin(user: User): User;
  list(): User[];
}

export { IUsersRepository, ICreateUserDTO, IFindById, IFindByEmail };
