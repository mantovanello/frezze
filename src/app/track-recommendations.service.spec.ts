import { TestBed } from '@angular/core/testing';

import { TrackRecommendationsService } from './track-recommendations.service';

describe('TrackRecommendationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrackRecommendationsService = TestBed.get(TrackRecommendationsService);
    expect(service).toBeTruthy();
  });
});
