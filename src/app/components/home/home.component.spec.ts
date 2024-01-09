import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { HackernewsService } from '../../shared/services/hackernews.service';
import { StoreService } from '../../shared/services/store.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let hackernewsService: HackernewsService;
  let storeService: StoreService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [HackernewsService, StoreService]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    hackernewsService = TestBed.inject(HackernewsService);
    storeService = TestBed.inject(StoreService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call freshSearch method on ngOnInit', async () => {
    spyOn(component, 'freshSearch');
    await component.ngOnInit();
    expect(component.freshSearch).toHaveBeenCalled();
  });

  it('should set search query to empty string on freshSearch', async () => {
    spyOn(storeService, 'setSearchQuery');
    await component.freshSearch();
    expect(storeService.setSearchQuery).toHaveBeenCalledWith('');
  });

  it('should call updateHackerNewsRes method on freshSearch', async () => {
    spyOn(hackernewsService, 'updateHackerNewsRes');
    await component.freshSearch();
    expect(hackernewsService.updateHackerNewsRes).toHaveBeenCalledWith('');
  });
});