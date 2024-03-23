import { UserService } from '../../src/services/index.js'
import { UserRepository } from '../../src/repository/index.js'

jest.mock('../../src/repository/index.js')

describe('user service signup test', () => {
    test('should successfully create a user', async () => {
        const data = {
            email: 'a@b.com',
            password: '123456'
        };
        (UserRepository.prototype.create).mockReturnValue({...data, createdAt: '2022-12-12', updatedAt: '2022-12-12'});
        const service = new UserService();
        const response = await service.signUp()
        expect(response.email).toBe(data.email);
    });
})