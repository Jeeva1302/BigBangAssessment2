import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorpartComponent } from './doctorpart.component';

describe('DoctorpartComponent', () => {
  let component: DoctorpartComponent;
  let fixture: ComponentFixture<DoctorpartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorpartComponent]
    });
    fixture = TestBed.createComponent(DoctorpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
