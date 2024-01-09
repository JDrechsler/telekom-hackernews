import { Component } from '@angular/core';
import { ApplicationState } from '../../shared/interfaces/application-state.interface';
import { StoreService } from '../../shared/services/store.service';
import { HackernewsService } from '../../shared/services/hackernews.service';
import { FormsModule } from '@angular/forms';
import { FeedStatus } from '../../shared/enums/feed-status.enum';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  searchQuery = '';

  constructor(private hackernewsService: HackernewsService, public storeService: StoreService) {}
  async performSearch() { 
    this.storeService.toggleSearchShowing()
    this.storeService.setSearchQuery(this.searchQuery)
    await this.hackernewsService.updateHackerNewsRes(this.searchQuery);
    return false
  }
}
