import { Injectable } from '@angular/core';
import { HackerNews, HackerNewsResponse } from '../interfaces/hackernews.interface';

@Injectable({
  providedIn: 'root'
})
export class HackernewsService {

  constructor() { }

  url = 'https://hn.algolia.com/api/v1/search_by_date?tags=story';

  async getAllHackerNews(): Promise<HackerNewsResponse> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
}
