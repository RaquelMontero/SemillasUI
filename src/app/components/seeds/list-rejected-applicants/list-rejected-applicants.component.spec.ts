import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRejectedApplicantsComponent } from './list-rejected-applicants.component';

describe('ListRejectedApplicantsComponent', () => {
  let component: ListRejectedApplicantsComponent;
  let fixture: ComponentFixture<ListRejectedApplicantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRejectedApplicantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRejectedApplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
