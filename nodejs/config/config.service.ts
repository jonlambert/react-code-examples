import { ValueNotPresent } from './exceptions/value-not-present.exception';
import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { existsSync, readFileSync } from 'fs';

@Injectable()
export class ConfigService {
  private readonly envConfig: { [key: string]: string } = {};

  constructor(filePath: string) {
    if (!existsSync(filePath)) {
      throw new Error(`Application server config not found at: ${filePath}`);
    }
    this.envConfig = dotenv.parse(readFileSync(filePath));
  }

  get(key: string): string | undefined {
    return this.envConfig[key];
  }

  definitelyGet(key: string): string {
    const value = this.get(key);
    if (!value) {
      throw new ValueNotPresent(`Required value for ${key} not present`);
    }
    return value;
  }
}
