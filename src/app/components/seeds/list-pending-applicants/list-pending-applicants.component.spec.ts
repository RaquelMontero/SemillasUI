import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPendingApplicantsComponent } from './list-pending-applicants.component';

describe('ListPendingApplicantsComponent', () => {
  let component: ListPendingApplicantsComponent;
  let fixture: ComponentFixture<ListPendingApplicantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPendingApplicantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPendingApplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
