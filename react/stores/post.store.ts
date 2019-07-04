import { Post } from './../models/post.interface';
import { observable, action } from 'mobx';
import { RootStore } from './root.store';

export class PostStore {
  constructor(private readonly rootStore: RootStore) {}

  @observable posts: Post[] = [];

  @action
  async fetchPosts() {
    this.posts = await this.rootStore.api.getPosts();
  }
}
