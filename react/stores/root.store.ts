import { APIClient } from './../network/apiClient.interface';
import { PostStore } from './post.store';
import { createClient } from '../network/createClient.function';
import { bootStores } from '../helpers/boot-stores.function';

export class RootStore {
  public postStore: PostStore;

  public api: APIClient;

  constructor(api?: APIClient) {
    this.api = api || createClient();
    this.postStore = new PostStore(this);

    // Initialise each store. Operations/reactions should be
    // created within these methods. This is preferential
    // to constructors as all stores will be loaded by this point.
    bootStores(this.postStore);
  }
}
