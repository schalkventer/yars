export interface Post {
    userId: number,
    id:  number,
    title: string,
    body: string,
}

export type getPostResponse = Post[] | Error;
export type getPosts = () => Promise<getPostResponse>

export interface Api {
    getPosts: getPosts
}