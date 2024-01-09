import { Component, OnInit } from '@angular/core';
import { HackernewsService } from '../../shared/services/hackernews.service';
import { HackernewsCardComponent } from "../hackernews-card/hackernews-card.component";
import { FeedStatus } from '../../shared/enums/feed-status.enum';
import { SearchComponent } from "../search/search.component";
import { StoreService } from '../../shared/services/store.service';
import { PaginationComponent } from "../pagination/pagination.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HackernewsCardComponent, SearchComponent, PaginationComponent]
})
export class HomeComponent implements OnInit{

  feedStatuses = FeedStatus;

  constructor(private hackernewsService: HackernewsService, public storeService: StoreService) {}
  async ngOnInit(): Promise<void> {
    await this.freshSearch()
  }

  async freshSearch() {
    this.storeService.setSearchQuery('')
    await this.hackernewsService.updateHackerNewsRes('');
  }
}
