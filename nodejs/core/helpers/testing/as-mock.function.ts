import 'jest';

/**
 * Function with no effects, that simply returns the value cast correctly as a Jest mock.
 * @param value
 */
export function asMock<T>(value: T): jest.Mock<T> {
  return (value as any) as jest.Mock<T>;
}
