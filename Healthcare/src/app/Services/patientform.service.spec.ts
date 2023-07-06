import { TestBed } from '@angular/core/testing';

import { PatientformService } from './patientform.service';

describe('PatientformService', () => {
  let service: PatientformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
