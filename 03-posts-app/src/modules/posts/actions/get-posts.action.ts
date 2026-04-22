import type { PostResponse } from '../interfaces/blog-response.interface';

export const getPosts = async (): Promise<PostResponse[]> => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = (await resp.json()) as PostResponse[];
    return data;
};
