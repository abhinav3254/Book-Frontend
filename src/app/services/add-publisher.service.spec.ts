import { TestBed } from '@angular/core/testing';

import { AddPublisherService } from './add-publisher.service';

describe('AddPublisherService', () => {
  let service: AddPublisherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddPublisherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
