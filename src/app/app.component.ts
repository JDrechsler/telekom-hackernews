import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from "./components/search/search.component";
import { StoreService } from './shared/services/store.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, RouterLink, HomeComponent, SearchComponent]
})
export class AppComponent {
    constructor(public storeService: StoreService) {}
}
