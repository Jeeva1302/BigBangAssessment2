import { TestBed } from '@angular/core/testing';

import { GetpatientService } from './getpatient.service';

describe('GetpatientService', () => {
  let service: GetpatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetpatientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
