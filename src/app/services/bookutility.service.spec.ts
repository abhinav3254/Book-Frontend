import { TestBed } from '@angular/core/testing';

import { BookutilityService } from './bookutility.service';

describe('BookutilityService', () => {
  let service: BookutilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookutilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
