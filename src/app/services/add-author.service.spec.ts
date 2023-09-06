import { TestBed } from '@angular/core/testing';

import { AddAuthorService } from './add-author.service';

describe('AddAuthorService', () => {
  let service: AddAuthorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddAuthorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
