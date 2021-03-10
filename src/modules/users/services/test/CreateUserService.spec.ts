import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import AppError from '@shared/errors/AppError';
import CreateUserService from '../CreateUserService';

describe('CreateUser', () => {
  it('should to be able to create a new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUserService = new CreateUserService(fakeUsersRepository);

    const user = await createUserService.execute({
      name: 'AgroFerro Família',
      phone: '6233333333',
      whatsapp: '62999999999',
      email: 'agroferrofamilia@gmail.com',
      password: 'agroferro123',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not to be able to create a new user with same email from another', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUserService = new CreateUserService(fakeUsersRepository);

    await createUserService.execute({
      name: 'AgroFerro Família',
      phone: '6233333333',
      whatsapp: '62999999999',
      email: 'agroferrofamilia@gmail.com',
      password: 'agroferro123',
    });

    expect(
      createUserService.execute({
        name: 'AgroPop PetShop',
        phone: '6244444444',
        whatsapp: '62988888888',
        email: 'agroferrofamilia@gmail.com',
        password: 'agropop123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
