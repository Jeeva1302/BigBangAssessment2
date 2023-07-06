import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddoctorComponent } from './adddoctor.component';

describe('AdddoctorComponent', () => {
  let component: AdddoctorComponent;
  let fixture: ComponentFixture<AdddoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdddoctorComponent]
    });
    fixture = TestBed.createComponent(AdddoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
