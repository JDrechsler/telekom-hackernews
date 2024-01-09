import { Injectable, computed, signal } from '@angular/core';
import { ApplicationState } from '../interfaces/application-state.interface';
import { FeedStatus } from '../enums/feed-status.enum';
import { HackerNews, HackerNewsResponse } from '../interfaces/hackernews.interface';

const initialState: ApplicationState = {
  hackerNewsRes: {
    hits: [],
    nbPages: 0,
    page: 0
  },
  hackerNews: [],
  searchShowing: false,
  searchQuery: '',
  feedStatus: FeedStatus.Loading,
  feedFetchError: null,
};

@Injectable({
  providedIn: 'root'
})
/**
 * Service for managing the application state.
 */
export class StoreService {

  private readonly _store = signal(initialState);
  readonly searchShowing = computed(() => this._store().searchShowing);
  readonly searchQuery = computed(() => this._store().searchQuery);
  readonly feedStatus = computed(() => this._store().feedStatus);
  readonly feedFetchError = computed(() => this._store().feedFetchError);
  readonly hackerNews = computed(() => this._store().hackerNewsRes.hits);
  readonly hackerNewsRes = computed(() => this._store().hackerNewsRes);
  toggleSearchShowing() {
    this._store.update((s) => ({ ...s, searchShowing: !s.searchShowing }));
  }

  setSearchQuery(searchQuery: string) {
    this._store.update((s) => ({ ...s, searchQuery }));
  }

  setHackerNewsRes(hackerNewsRes: HackerNewsResponse) {
    this._store.update((s) => ({ ...s, hackerNewsRes }));
  }

  setFeedStatus(feedStatus: FeedStatus) {
    this._store.update((s) => ({ ...s, feedStatus }));
  }

  setFeedFetchError(feedFetchError: any) {
    this._store.update((s) => ({ ...s, feedFetchError }));
  }
}
