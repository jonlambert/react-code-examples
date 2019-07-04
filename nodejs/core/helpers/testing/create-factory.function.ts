export const createFactory = <T>(defaults: T) => (
  overrides?: Partial<T>,
): T => {
  return { ...defaults, ...overrides };
};
