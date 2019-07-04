import 'jest';
import * as faker from 'faker';
import { ConfigService } from './config.service';
import { readFileSync, existsSync } from 'fs';
import { asMock } from '../core/helpers/testing/as-mock.function';

jest.mock('fs');

/**
 * For the sake of brevity and illustration purposes, this is both a unit and integration test.
 * I would ordinarily have mocked out the dotenv call in the same fashion as the
 * 'fs' module and included a seperate e2e/integration test.
 */

describe('config.service', () => {
  const filePath = 'path/to/config.env';
  const awsSecret = faker.random.uuid();
  const fileContents = `
    AWS_SECRET=${awsSecret}
  `;

  let service: ConfigService;

  beforeEach(() => {
    asMock(existsSync).mockReturnValue(true);
    asMock(readFileSync).mockReturnValue(fileContents);
    service = new ConfigService(filePath);
  });

  describe('constructor', () => {
    it('loads and parses file at the path specified', () => {
      expect(readFileSync).toBeCalledWith(filePath);
    });
    it('fails correctly if file not found', () => {
      asMock(existsSync).mockReturnValue(false);
      expect(() => {
        new ConfigService(filePath);
      }).toThrowError();
    });
  });

  describe('.get', () => {
    it('fetches the config value', () => {
      expect(service.get('AWS_SECRET')).toEqual(awsSecret);
    });
    it('returns undefined if key not found', () => {
      expect(service.get('AWS_TOKEN')).toEqual(undefined);
    })
  });
  describe('.definitelyGet', () => {
    it('fetches a key', () => {
      expect(service.definitelyGet('AWS_SECRET')).toEqual(awsSecret);
    });
    it('throws an error if key not found', () => {
      expect(() => service.definitelyGet('FOO')).toThrowError();
    })
  });
});
