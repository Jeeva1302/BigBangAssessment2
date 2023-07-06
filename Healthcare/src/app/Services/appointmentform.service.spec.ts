import { TestBed } from '@angular/core/testing';

import { AppointmentformService } from './appointmentform.service';

describe('AppointmentformService', () => {
  let service: AppointmentformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
