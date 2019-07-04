import { Repository } from 'typeorm';

export const createRepositoryMock = <T>() =>
  jest.fn<Repository<T>>(() => ({
    findOne: jest.fn(entity => entity),
    create: jest.fn(entity => entity),
    save: jest.fn(entity => entity),
  }));
