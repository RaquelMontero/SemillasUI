import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListApprovedApplicantsComponent } from './list-approved-applicants.component';

describe('ListApprovedApplicantsComponent', () => {
  let component: ListApprovedApplicantsComponent;
  let fixture: ComponentFixture<ListApprovedApplicantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListApprovedApplicantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListApprovedApplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
