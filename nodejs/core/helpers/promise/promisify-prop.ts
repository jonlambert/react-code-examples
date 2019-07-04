/**
 * Helper to quickly wrap the value for the supplied key in a Promise.
 * @param object 
 * @param key 
 */
export const promisifyProp = <T>(object: T, key: keyof T) => {
  return {
    ...object,
    [key]: Promise.resolve(object),
  };
};
