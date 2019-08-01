import { TestBed } from '@angular/core/testing';

import { SentiService } from './senti.service';

describe('SentiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SentiService = TestBed.get(SentiService);
    expect(service).toBeTruthy();
  });
});
