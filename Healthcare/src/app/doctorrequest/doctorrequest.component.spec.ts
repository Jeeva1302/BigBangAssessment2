import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorrequestComponent } from './doctorrequest.component';

describe('DoctorrequestComponent', () => {
  let component: DoctorrequestComponent;
  let fixture: ComponentFixture<DoctorrequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorrequestComponent]
    });
    fixture = TestBed.createComponent(DoctorrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
