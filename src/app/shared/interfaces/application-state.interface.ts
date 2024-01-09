import { FeedStatus } from "../enums/feed-status.enum";
import { HackerNews, HackerNewsResponse } from "./hackernews.interface";

export interface ApplicationState {
    searchShowing: boolean;
    searchQuery: string;
    hackerNewsRes: HackerNewsResponse;
    hackerNews: HackerNews[];
    feedStatus: FeedStatus;
    feedFetchError: any;
}