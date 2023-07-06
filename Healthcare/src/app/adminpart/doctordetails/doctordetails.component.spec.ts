import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctordetailsComponent } from './doctordetails.component';

describe('DoctordetailsComponent', () => {
  let component: DoctordetailsComponent;
  let fixture: ComponentFixture<DoctordetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctordetailsComponent]
    });
    fixture = TestBed.createComponent(DoctordetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
