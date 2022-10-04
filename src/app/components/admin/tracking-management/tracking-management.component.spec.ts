import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingManagementComponent } from './tracking-management.component';

describe('TrackingManagementComponent', () => {
  let component: TrackingManagementComponent;
  let fixture: ComponentFixture<TrackingManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackingManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
