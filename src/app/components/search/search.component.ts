import { Component } from '@angular/core';
import { StoreService } from '../../shared/services/store.service';
import { HackernewsService } from '../../shared/services/hackernews.service';
import { FormsModule } from '@angular/forms';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  searchQuery = '';
  searchQueryDebounced = new Subject<string>();

  constructor(private hackernewsService: HackernewsService, public storeService: StoreService) {
    this.searchQueryDebounced.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(async () => {
        await this.performSearch()
      });
  }
  async performSearch() { 
    this.storeService.setSearchQuery(this.searchQuery)
    await this.hackernewsService.updateHackerNewsRes(this.searchQuery);
    return false
  }

  async search() { 
    await this.performSearch()
    this.storeService.toggleSearchShowing()
  }
}
