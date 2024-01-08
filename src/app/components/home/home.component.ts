import { Component, OnInit } from '@angular/core';
import { HackernewsService } from '../../shared/services/hackernews.service';
import { HackerNews } from '../../shared/interfaces/hackernews.interface';
import { HackernewsCardComponent } from "../hackernews-card/hackernews-card.component";
import { FeedStatus } from '../../shared/enums/feed-status.enum';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HackernewsCardComponent]
})
export class HomeComponent implements OnInit{

  hackerNews: HackerNews[] = [];
  feedStatus = FeedStatus.Loading
  feedStatuses = FeedStatus;
  feedFetchError: any

  constructor(private hackernewsService: HackernewsService) {}
  async ngOnInit(): Promise<void> {
    try {
      const res = await this.hackernewsService.getAllHackerNews();
      this.hackerNews = res.hits;
      console.log(this.hackerNews)
      this.feedStatus = FeedStatus.Success;
    } catch (error) {
      console.error(error)
      this.feedStatus = FeedStatus.Error;
      this.feedFetchError = error;
    }
  }
}
