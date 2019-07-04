/**
 * Calls 'boot' on each store supplied, if available.
 * @param stores 
 */
export const bootStores = (...stores: any[]) =>
  stores.forEach(store => {
    typeof store.boot === 'function' && store.boot();
  });
