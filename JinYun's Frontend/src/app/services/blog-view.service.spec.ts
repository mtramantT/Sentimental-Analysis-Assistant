import { TestBed } from '@angular/core/testing';

import { BlogViewService } from './blog-view.service';

describe('BlogViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogViewService = TestBed.get(BlogViewService);
    expect(service).toBeTruthy();
  });
});
