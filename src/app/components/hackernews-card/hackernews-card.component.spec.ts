import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HackernewsCardComponent } from './hackernews-card.component';

describe('HackernewsCardComponent', () => {
  let component: HackernewsCardComponent;
  let fixture: ComponentFixture<HackernewsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HackernewsCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HackernewsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
