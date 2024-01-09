import { Component } from '@angular/core';
import { StoreService } from '../../shared/services/store.service';
import { HackernewsService } from '../../shared/services/hackernews.service';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  constructor(public storeService: StoreService, private hackernewsService: HackernewsService) { }
  
  isFirstPage() { 
    return this.storeService.hackerNewsRes().page + 1 === 1
  }
  isLastPage() { 
    return this.storeService.hackerNewsRes().page + 1 === this.storeService.hackerNewsRes().nbPages
  }

  async firstPage() { 
    if (this.isFirstPage()) return
    this.hackernewsService.updateHackerNewsRes(this.storeService.searchQuery(), 0)
  }

  lastPage() { 
    if (this.isLastPage()) return
    this.hackernewsService.updateHackerNewsRes(this.storeService.searchQuery(), this.storeService.hackerNewsRes().nbPages - 1)
  }

  async nextPage() { 
    if (this.isLastPage()) return
    await this.hackernewsService.updateHackerNewsRes(this.storeService.searchQuery(), (this.storeService.hackerNewsRes().page) + 1)
  }

  async prevPage() { 
    if (this.isFirstPage()) return
    await this.hackernewsService.updateHackerNewsRes(this.storeService.searchQuery(), (this.storeService.hackerNewsRes().page) - 1)
  }
}
