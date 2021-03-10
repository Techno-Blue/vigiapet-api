import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import CreateUserService from '../CreateUserService';
import AuthenticateUserService from '../AuthenticateUserService';

describe('AuthenticateUser', () => {
  it('should to be able to athenticate', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUserService = new CreateUserService(fakeUsersRepository);
    const authenticateUserService = new AuthenticateUserService(
      fakeUsersRepository,
    );

    await createUserService.execute({
      name: 'AgroFerro Família',
      phone: '6233333333',
      whatsapp: '62999999999',
      email: 'agroferrofamilia@gmail.com',
      password: 'agroferro123',
    });

    const response = await authenticateUserService.execute({
      email: 'agroferrofamilia@gmail.com',
      password: 'agroferro123',
    });

    expect(response).toHaveProperty('token');
  });
});
