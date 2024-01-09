import { Injectable } from '@angular/core';
import { HackerNewsResponse } from '../interfaces/hackernews.interface';
import { StoreService } from './store.service';
import { FeedStatus } from '../enums/feed-status.enum';

@Injectable({
  providedIn: 'root'
})
export class HackernewsService {
  constructor(private storeService: StoreService) { }
  url = 'https://hn.algolia.com/api/v1/search_by_date';

  /**
   * Retrieves the latest Hacker News articles.
   * 
   * @param searchStr - The search string to filter the articles by title or author.
   * @param page - The page number of the results.
   * @returns A Promise that resolves to a HackerNewsResponse object.
   */
  async getLatestHackerNews(searchStr: string, page: number): Promise<HackerNewsResponse> {
    const data = await fetch(`${this.url}?query=${searchStr}&tags=story&page=${page}`);
    const json: HackerNewsResponse = await data.json();
    return json ?? [];
  }

  /**
   * Updates the Hacker News response by fetching the latest articles based on the search string and page number.
   * @param searchStr The search string to filter the articles.
   * @param page The page number of the articles to fetch.
   */
  async updateHackerNewsRes(searchStr: string = '', page: number = 0) {
    try {
      this.storeService.setFeedStatus(FeedStatus.Loading)
      const res = await this.getLatestHackerNews(searchStr, page)
      this.storeService.setHackerNewsRes(res)
      this.storeService.setFeedStatus(FeedStatus.Success);
    } catch (error) {
      console.error('There was an error trying to fetch the latest Hacker News articles.', error)
      this.storeService.setFeedStatus(FeedStatus.Error);
    }
  }
}
