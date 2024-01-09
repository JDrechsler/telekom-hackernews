import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { Subject } from 'rxjs';
import { HackernewsService } from '../../shared/services/hackernews.service';
import { StoreService } from '../../shared/services/store.service';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let hackernewsService: HackernewsService;
  let storeService: StoreService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchComponent],
      providers: [HackernewsService, StoreService]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    hackernewsService = TestBed.inject(HackernewsService);
    storeService = TestBed.inject(StoreService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call performSearch and toggleSearchShowing methods when search method is called', async () => {
    const performSearchSpy = spyOn(component, 'performSearch').and.callThrough();
    const toggleSearchShowingSpy = spyOn(storeService, 'toggleSearchShowing');
    await component.search();
    expect(performSearchSpy).toHaveBeenCalled();
    expect(toggleSearchShowingSpy).toHaveBeenCalled();
  });
});