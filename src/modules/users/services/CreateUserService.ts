import { hash } from 'bcryptjs';
import { injectable, inject } from 'tsyringe';
import User from '@modules/users/infra/typeorm/entities/User';
import AppError from '@shared/errors/AppError';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequestDTO {
  name: string;
  phone: string;
  whatsapp: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) { }

  public async execute({
    name,
    phone,
    whatsapp,
    email,
    password,
  }: IRequestDTO): Promise<User> {
    const checkUserExist = await this.usersRepository.findByEmail(email);

    if (checkUserExist) {
      throw new AppError('Email address already used');
    }

    const hashPassword = await hash(password, 8);

    const user = await this.usersRepository.create({
      name,
      phone,
      whatsapp,
      email,
      password: hashPassword,
    });

    return user;
  }
}

export default CreateUserService;
