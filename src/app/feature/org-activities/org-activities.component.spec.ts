import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgActivitiesComponent } from './org-activities.component';

describe('OrgActivitiesComponent', () => {
  let component: OrgActivitiesComponent;
  let fixture: ComponentFixture<OrgActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgActivitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrgActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
