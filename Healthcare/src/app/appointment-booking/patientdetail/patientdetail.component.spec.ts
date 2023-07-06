import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientdetailComponent } from './patientdetail.component';

describe('PatientdetailComponent', () => {
  let component: PatientdetailComponent;
  let fixture: ComponentFixture<PatientdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientdetailComponent]
    });
    fixture = TestBed.createComponent(PatientdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
