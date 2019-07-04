import axios from 'axios';
import { Post } from '../models/post.interface';

export const getPosts = async () => {
  try {
    // Here we would pass along an api key which is handed down to this function via the createClient instantiation.
    const users = await axios.get<Post[]>(`https://example.com/users`); 
    return users.data;
  } catch (error) {
    // ...Handle axios errors....
  }
};
