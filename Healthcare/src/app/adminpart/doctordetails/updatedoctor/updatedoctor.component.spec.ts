import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedoctorComponent } from './updatedoctor.component';

describe('UpdatedoctorComponent', () => {
  let component: UpdatedoctorComponent;
  let fixture: ComponentFixture<UpdatedoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatedoctorComponent]
    });
    fixture = TestBed.createComponent(UpdatedoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
