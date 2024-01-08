export interface HackerNews {
    author: string;
    created_at: string;
    title: string;
    updated_at: string;
    url: string;
}

export interface HackerNewsResponse {
    hits: HackerNews[];
    hitsPerPage: number;
    nbPages: number;
    page: number;
}