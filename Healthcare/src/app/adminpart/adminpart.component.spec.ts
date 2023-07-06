import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpartComponent } from './adminpart.component';

describe('AdminpartComponent', () => {
  let component: AdminpartComponent;
  let fixture: ComponentFixture<AdminpartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminpartComponent]
    });
    fixture = TestBed.createComponent(AdminpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
