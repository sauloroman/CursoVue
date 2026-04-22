export interface BasePost {
    id: number;
    title: string;
    body: string;
}

export interface PostResponse extends BasePost {
    userId: number;
}
