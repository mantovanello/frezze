import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackRecommendationsComponent } from './track-recommendations.component';

describe('TrackRecommendationsComponent', () => {
  let component: TrackRecommendationsComponent;
  let fixture: ComponentFixture<TrackRecommendationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackRecommendationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackRecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
