import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentdetailComponent } from './appointmentdetail.component';

describe('AppointmentdetailComponent', () => {
  let component: AppointmentdetailComponent;
  let fixture: ComponentFixture<AppointmentdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointmentdetailComponent]
    });
    fixture = TestBed.createComponent(AppointmentdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
