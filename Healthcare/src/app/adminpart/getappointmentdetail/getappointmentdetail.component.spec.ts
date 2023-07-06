import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetappointmentdetailComponent } from './getappointmentdetail.component';

describe('GetappointmentdetailComponent', () => {
  let component: GetappointmentdetailComponent;
  let fixture: ComponentFixture<GetappointmentdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetappointmentdetailComponent]
    });
    fixture = TestBed.createComponent(GetappointmentdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
