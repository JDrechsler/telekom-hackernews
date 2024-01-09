import { Component, Input } from '@angular/core';
import { HackerNews } from '../../shared/interfaces/hackernews.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hackernews-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hackernews-card.component.html',
  styleUrl: './hackernews-card.component.scss'
})
export class HackernewsCardComponent {
  @Input() hackerNews: HackerNews = {
    title: '',
    url: '',
    author: '',
    created_at: '',
    updated_at: '',
  };
}
